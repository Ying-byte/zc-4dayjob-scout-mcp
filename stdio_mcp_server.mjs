#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "4dayjob",
  boardId: "4dayjob-official",
  domain: "4dayjob.com",
  npmName: "zc-4dayjob-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
