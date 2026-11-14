// food-picture-01 entry (Node 22, standard library only): the best-looking
// food picture is entry.png beside this file -- a steaming bowl of tonkotsu
// ramen, chopsticks lifting glossy noodles, chashu, a jammy-yolked egg and
// scallions in soft window light -- and this program copies it to
// /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB
// and 1024 by 1024 pixels, and the judge sees exactly the bytes copied, so
// the file is stored already within those limits (1024 px tall, PNG under
// 1 MiB). The copy is byte for byte: what the judge sees is exactly
// the file in this repository.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
