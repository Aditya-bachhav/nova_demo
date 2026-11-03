import { spawnSync } from 'node:child_process';
import process from 'node:process';

const registry = [
  'https://reactdrops.dev/r/shape-physics.json',
  'https://reactdrops.dev/r/fan-gallery.json',
  'https://reactdrops.dev/r/refracted-text.json',
  'https://reactdrops.dev/r/showcase-pointer.json',
  'https://reactdrops.dev/r/chromatic-button.json',
  'https://reactdrops.dev/r/soap-bubble.json',
];

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
for (const url of registry) {
  console.log(`\nInstalling ${url}`);
  const result = spawnSync(command, ['shadcn@latest', 'add', url], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.status !== 0) {
    console.error(`\nInstallation stopped at ${url}. Resolve the CLI or registry error, then rerun: npm run setup:reactdrops`);
    process.exit(result.status ?? 1);
  }
}

console.log('\nReactDrops components installed. Review the installed source and keep its embedded license notices.');
