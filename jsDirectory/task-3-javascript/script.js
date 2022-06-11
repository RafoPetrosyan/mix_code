const USER_ROLES = {
    MAIN_ADMIN: 'mainAdmin',
    ADMIN: 'admin',
    MODERATOR: 'moderator',
    USER: 'user'
};

const currentUserRole = 'moderator';
const itemName = 'report-events';
const itemNameList = ['report-comments', 'reports', 'users', 'support'];


const navigationList = [
    {
        title: ' Список событий',
        link: '/admin/events',
        svg: 'appstore-outlined',
        name: 'events',
        access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN, USER_ROLES.MODERATOR]
    },
    {
        title: ' Список пользователей ',
        link: '/admin/users',
        svg: 'user-outlined',
        name: 'users',
        access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN]
    },
    {
        title: ' Список типов',
        link: '/admin/types',
        svg: 'gold-outlined',
        name: 'types',
        access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN]
    },
    {
        title: ' Техническая поддержка',
        link: '/admin/support',
        svg: 'message-outlined',
        name: 'support',
        access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN, USER_ROLES.MODERATOR]
    },
    {
        title: ' Репорт',
        link: '/admin/report',
        svg: 'file-done-outlined',
        name: 'report',
        access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN, USER_ROLES.MODERATOR],
        subItem: [
            {
                title: ' Шаблоны',
                link: '/admin/reports',
                name: 'reports',
                access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN]
            },
            {
                title: ' Пользователи',
                link: '/admin/report/users',
                name: 'reports-users',
                access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN, USER_ROLES.MODERATOR]
            },
            {
                title: ' Событие',
                link: '/admin/report/events',
                name: 'report-events',
                access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN, USER_ROLES.MODERATOR]
            },
            {
                title: ' Комментарии',
                link: '/admin/report/comments',
                name: 'report-comments',
                access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.MODERATOR],
                subItem: [
                    {
                        title: ' Шаблоны',
                        link: '/admin/reports',
                        name: 'reports',
                        access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN]
                    },
                    {
                        title: ' Пользователи',
                        link: '/admin/report/users',
                        name: 'reports-users',
                        access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN, USER_ROLES.MODERATOR]
                    },
                    {
                        title: ' Событие',
                        link: '/admin/report/events',
                        name: 'report-events',
                        access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.ADMIN, USER_ROLES.MODERATOR]
                    },
                    {
                        title: ' Комментарии',
                        link: '/admin/report/comments',
                        name: 'report-comments',
                        access: [USER_ROLES.MAIN_ADMIN, USER_ROLES.MODERATOR]
                    }
                ]
            }
        ]
    }
];

const addBadge = (item, itemName, itemNameList = []) =>{
    if(item.name === itemName){
        item.badge = true;
    }else if(itemNameList.includes(item.name)){
        item.badge = true;
    }else{
        item.badge = false;
    }
    if(item.subItem){
        item.subItem.map(item =>{
            addBadge(item, itemName);
        })
    }
    return item;
}

const filtredArr = (arr, currentUserRole, itemName, itemNameList) =>{
    let cloneArr = JSON.parse(JSON.stringify(arr));

    return cloneArr.filter(item => {
        if(item.subItem){
            item.subItem = filtredArr(item.subItem, currentUserRole);
        }
        return item.access.includes(currentUserRole);
    }).map(item => {
        return addBadge(item, itemName, itemNameList);
        
    })
};

console.log(filtredArr(navigationList, currentUserRole, itemName, itemNameList));
// console.log(navigationList);


