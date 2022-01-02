// command | deno run --allow-run scripts.ts <script> |

// save the script name in a variable
const scriptName = Deno.args[0]

// create a variable to hold the child process
let p;

// switch statement for each possible script
switch (scriptName) {

  case "start":
    // run a command
    p = Deno.run({ cmd: ["deno", "run", "--allow-net", "./src/index.ts"] });
    // process output when it completes
    await p.status()
    break;


  case "test":
    p = Deno.run({
      cmd: ["deno", "run", "test"],
    });
    await p.status()    
    break;

  // default output if not a script you made  
  default:
    console.log("No Script by that name");
}
