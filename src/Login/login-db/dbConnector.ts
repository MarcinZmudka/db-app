
class DB_connector {
    check_login_pass(login: string, password: string){
        return fetch(`http://localhost:3001/?login=${login}&password=${password}`)
            .then(res => res.json());
    }
}
export default DB_connector;