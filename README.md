# Deno as Node

A barebones starter to write Typescript code as if you're actually writing for a Node project.

## Commands

Action | What you type into the terminal |
--- | --- |
Start executing *src/index.ts* | deno run start |

## Stuff that needs to change

### Import from Node Libraries
Deno has done extensive work to be compatible with Node Libraries as described [here](https://docs.deno.com/examples/node_built_in/). 

As an example:
```
// standard Node import of the file system library
import fs from "fs";
```
Turns into:
```
// Node library compatibility for Deno looks like this
import fs from "node:fs";
```


### Import from local files

Importing from your local files will require that you explicit.y add ```.ts```, so instead of 
```
// standard import statements for JavaScript (2015 and above) and TypeScript
import { Foo } from '../Utils';
```
You must type
```
// Deno requires the .ts qualifier, since without implies a js file
import { Foo } from '../Utils.ts';
```


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