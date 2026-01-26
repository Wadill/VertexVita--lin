import { NextRequest, NextResponse } from 'next/server';
import { getIndexer } from '@/lib/0g-storage';
import path from 'path';
import fs from 'fs';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const TMP_DIR = path.join(process.cwd(), 'tmp');

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ rootHash: string }> }
) {
  let tempFilePath: string | undefined;

  try {
    const { rootHash } = await params;
    
    // Security validation
    const hashRegex = /^[0-9a-fA-F]{32,64}$/i;
    if (!hashRegex.test(rootHash)) {
      return NextResponse.json(
        { error: 'Invalid rootHash format' }, 
        { status: 400 }
      );
    }

    const indexer = getIndexer();
    tempFilePath = path.join(TMP_DIR, `${rootHash}.pdf`);
    
    // Ensure tmp directory exists
    if (!fs.existsSync(TMP_DIR)) {
      fs.mkdirSync(TMP_DIR, { recursive: true });
    }

    // Download with proof verification
    const err = await indexer.download(rootHash, tempFilePath, true);
    if (err) {
      throw new Error(`Download error: ${err}`);
    }

    // Verify file exists and check size
    if (!fs.existsSync(tempFilePath)) {
      throw new Error('Downloaded file not found');
    }

    const stats = fs.statSync(tempFilePath);
    if (stats.size > MAX_FILE_SIZE) {
      throw new Error('File too large');
    }

    const fileBuffer = await fs.promises.readFile(tempFilePath);
    
    // ✅ SOLUTION 2: Convert to Uint8Array - 100% TypeScript Compatible
    const uint8Array = new Uint8Array(fileBuffer);
    return new NextResponse(new Blob([uint8Array]), {
      headers: { 
        'Content-Type': 'application/pdf', 
        'Content-Disposition': `attachment; filename="${rootHash}.pdf"`,
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=3600'
      },
    });
  } catch (error: unknown) {
    console.error('Download failed:', error);
    const errorMessage = error instanceof Error ? error.message : 'Download failed';
    
    return NextResponse.json(
      { error: errorMessage }, 
      { status: 500 }
    );
  } finally {
    // Always cleanup temp file
    if (tempFilePath && fs.existsSync(tempFilePath)) {
      try {
        await fs.promises.unlink(tempFilePath);
      } catch (cleanupError) {
        console.error('Temp file cleanup failed:', cleanupError);
      }
    }
  }
}