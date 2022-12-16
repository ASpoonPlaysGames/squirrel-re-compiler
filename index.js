const core = require('@actions/core');
const github = require('@actions/github');
var exec = require('child_process').execFile;



try
{	
	const time = (new Date()).toTimeString();
	core.setOutput("time", time);

    exec('dir', function(err, data) {  
        console.log(err)
        console.log(data.toString());     
        core.setFailed(err);                  
    });
    
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