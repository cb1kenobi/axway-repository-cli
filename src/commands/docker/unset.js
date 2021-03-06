import { spawn } from 'child_process';
import { resolve } from '../../environments';

export default {
	desc: 'Remove Axway Repository from docker native command',

	async action({ console }) {
		try {
			const config = resolve();

			const dockerLogin = spawn('docker', ['logout', config.docker.url]);
			dockerLogin.stdout.on('data', (data) => {
				console.log(`Docker: ${data}`);
			});

			dockerLogin.stderr.on('data', (data) => {
				console.error(`stderr: ${data}`);
			});

			// dockerLogin.on('close', (code) => {
			// 	console.log(`child process exited with code ${code}`);
			// });
		} catch (err) {
			console.error(err.toString());
		}
	},
};
