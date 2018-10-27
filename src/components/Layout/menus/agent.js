// import MakingMoney from "../../../pages/dashboard/agent/makingMoney";

const base = '/dashboard/agent';

export default [
    {
        key:'dashboard',
        name: 'dashboard',
        pathname: base,
        exact: true,
    },
    {
        key:'MakingMoney',
        name: '推广赚钱',
        pathname: `${base}/MakingMoney`
    },
    {
        key:'Accept',
        name: '收下级赚钱',
        pathname: `${base}/accept`,
        exact: true,
        children: [
            {
                key:'accept',
                name: '邀请好友',
                pathname: `${base}/accept/InviteFriends`,
                exact: true,
            },
            {
                name: '帮他开户',
                pathname: `${base}/accept/HelpAccount`,
            },
            {
                name: '代理管理',
                pathname: `${base}/accept/AgentManagement`
            },
        ]
    },
    {
        key: 'money',
        name: '提现',
        pathname: `${base}/money`,
        exact: true,
        children: [
            {
                key: 'money_index',
                name: '余额提现',
                pathname: `${base}/money/withdraw`,
                exact: true,

            },
            {
                key: 'money_record',
                name: '提现记录',
                pathname: `${base}/money/record`,
            },
            {
                key: 'money_update_password',
                name: '修改提现密码',
                pathname: `${base}/money/password`,
            },
            {
                key: 'money_account',
                name: '提现账户设置',
                pathname: `${base}/money/account`,
            },
        ]
    },
    {
        name: '推广数据',
        pathname: `${base}/tui`
    },
    {
        name: '税收明细',
        pathname: `${base}/shui`
    },
    {
        name: '联系我们',
        pathname: `${base}/contact`
    },

]
