import * as request from 'request'

export class GithubApiService {
    getUserInfo(userName: string) {
        let options: any = {
            headers: {
                'User-Agent': 'request'
            }
        }
        request.get(`https://api.github.com/users/${userName}`, options, (error, response, body) => {
            console.log(body);
            // console.log(error);
        })
    }

    getRepos() {

    }
}