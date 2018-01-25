var manager = new RollupManager();
 
manager.addRollupRule({
 name: 'login'
 , description: 'log in to OrangeHRM'
 , args: [ { name: 'login' , description: 'User name' }
			, { name: 'pwd' , description: 'password' } ]
 , commandMatchers: []
 , getExpandedCommands: function(args) {
 
	var commands = [];
 
	commands.push({command: 'open', target: '/OrangeHRM'});
	commands.push({command: 'sendKeys', target: 'txtUsername', value: args.login});
	commands.push({command: 'sendKeys', target: 'txtPassword', value: args.pwd});
	commands.push({command: 'clickAndWait', target: 'btnLogin'});
	return commands;
 }
});
