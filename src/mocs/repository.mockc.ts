import { USER_LIST } from './user.mocks';
import { Repository } from './../models/repository.interface';
const repositoryList: Repository[] = [
    {
        name: 'Ionic Camera 3',
        description: 'Using the camera in an ionic app',
        owner: USER_LIST[0]
    },
    {
        name: 'Sms',
        description: 'Using the SMS in an ionic app',
        owner: USER_LIST[1]
    },
    {
        name: 'Geo Location',
        description: 'Using the GPS in an ionic app',
        owner: USER_LIST[1]
    }
];
export const Repository_List = repositoryList;