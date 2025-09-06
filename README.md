# Deno as Node

A barebones starter to write Typescript code as if you're actually writing for a Node project.

## Commands

Action | What you type into the terminal |
--- | --- |
Start executing *src/index.ts* | deno run start |

## Security issues

Deno is deadly serious about security and won't allow any reading or writing of files or network access until you explicitly allow these activities. 

Privileges | option |
--- | --- |
local file reading | --allow-read |
local file writing | --allow-write |
network access | --allow-net |
access to environment variables | --allow-env |
access to operating system information | --allow-sys |
execute sub-processes | --allow-run |
all of the above | --allow-all |

The easiest way to allow any of the previous privileges listed above is to add it to the command line inside of `deno.json`.

```
 "tasks": {
    "start": "deno run --watch --allow-read src/index.ts"
  },
```
The previous code allows file read privileges by using `--allow-read`.

```
 "tasks": {
    "start": "deno run --watch --allow-all src/index.ts"
  },
```
The previous code allows all privileges by using `--allow-all`.

Modify deno.json tasks as needed.