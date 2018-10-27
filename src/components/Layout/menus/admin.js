const base = '/dashboard/system';

export default [
    {
        name: 'dashboard',
        pathname: '/dashboard',
        exact: true,
    },
    {
        name: '二维码查询代理渠道',
        pathname: `${base}/twodcode`,
        exact: true,
    },
    {
        name: '代理反馈',
        pathname: `${base}/feedback`,
        exact: true,
    },
    {
        name: '公告管理',
        pathname: `${base}/annoucement`,
        exact: true,
    },
    {
        name: '编修小贴士',
        pathname: `${base}/editSticker`,
        exact: true,
    },
    {
        name: '审核提现',
        pathname: `${base}/submitWithdraw`,
        exact: true,
    },
    {
        name: '推送讯息',
        pathname: `${base}/pushMessage`,
        exact: true,
    },
    {
        name: '登录日志',
        pathname: `${base}/logManagement`,
        exact: true,
    },
    {
        name: '白名单管理',
        pathname: `${base}/whitelistManagement`,
        exact: true,
    },
    
    {
        name: '查询玩家渠道',
        pathname: `${base}/select`
    },
    {
        name: '运维管理',
        pathname: `${base}/gou`,
        exact: true,
        children: [
            {
                name: '运维管理下级1',
                pathname: `${base}/gou/ai`
            },
            {
                name: '运维管理下级2',
                pathname: `${base}/gou/op`
            },
        ]
    },
    {
        name: '收下级赚钱',
        pathname: `${base}/bian`
    },
]
