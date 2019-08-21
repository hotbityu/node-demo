import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

ajax.get("https://www.baidu.com/").pipe(
    map(userResponse => console.log('users: ', userResponse)),
    catchError(error => {
        console.log('error: ', error);
        return of(error);
    })
);