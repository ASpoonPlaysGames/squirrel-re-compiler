const core = require('@actions/core');
const github = require('@actions/github');
var exec = require('child_process').execFile;



try
{
	const directory = core.getInput("directory")
	console.log(`Formatting files in ${directory} that end in .nut or .gnut`);
	
	const time = (new Date()).toTimeString();
	core.setOutput("time", time);

    console.log("starting exe");
    exec('SquirrelStandalone.exe', function(err, data) {  
        console.log(err)
        console.log(data.toString());     
        core.setFailed(err);                  
    });

} 
catch (error)
{
	core.setFailed(error.message);
}