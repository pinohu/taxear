// Test runner.
//
// `node --test "test/*.test.mjs"` exits 0 when the glob matches nothing, so a renamed
// directory would turn the whole suite into a silent no-op that still reports success.
// This runs the same files and fails if no test actually ran.
import { run } from 'node:test';
import { spec } from 'node:test/reporters';

const MIN_TESTS = 1;
let passed = 0, failed = 0;

const stream = run({
  globPatterns: ['test/*.test.mjs'],
  execArgv: ['--experimental-strip-types'],  // the parsers under test are TypeScript
  concurrency: true,
});

stream.on('test:pass', e => { if (!e.nesting) passed++; });
stream.on('test:fail', e => { if (!e.nesting) failed++; });
stream.compose(spec).pipe(process.stdout);

stream.on('end', () => {
  if (failed > 0) {
    console.error(`\ntests: ${failed} failed, ${passed} passed`);
    process.exit(1);
  }
  if (passed < MIN_TESTS) {
    console.error(`\ntests: no tests ran — the glob matched nothing. Check test/ and scripts/run_tests.mjs.`);
    process.exit(1);
  }
  console.log(`tests: ${passed} passed`);
});
