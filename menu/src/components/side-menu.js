let sideMenu=[
  {
    'title':'APP1',
    'icon':'house',
    'route':{name: 'app1'},
    
  },
  {
    'title':'APP2',
    'icon':'group1',
    'subMenu':[
        {
          'title':'main',
          'route':{name: 'app2'},
        },
        {
          'title':'about',
          'route':{name: 'about'},
        },
    ]
    
    
  },
  // {
  //   'title':'运营管理',
  //   'icon':'shop',
  //   'subMenu':[
  //     {
  //       'title':'推荐返佣管理',
  //       'route':{name: 'operation-envoy-rebate-bills'},
  //       'activePath':['operation-envoy-rebate']
  //     }, {
  //       'title':'消息通知',
  //       'route':{name: 'operation-notify'},
  //       'activePath':['operation-create-notify']
  //     }, {
  //       'title':'渠道管理',
  //       'route':{name: 'operation-channel-management'}
  //     }, {
  //       'title':'官网公告',
  //       'route':{name: 'operation-announcement-management'}
  //     }, {
  //       'title':'标签管理',
  //       'route':{name: 'operation-tag-management'}
  //     }, {
  //       'title':'活动列表',
  //       'route':{name: 'activity-list'},
  //       'activePath':['activity-detail']
  //     }, {
  //       'title':'活动页配置',
  //       'route':{name: 'activity-page-config'}
  //     }, {
  //       'title':'券列表',
  //       'route':{name: 'coupon-list'},
  //       'activePath':['coupon-detail']
  //     }, {
  //       'title':'发券管理',
  //       'route':{name: 'send-coupon-management'},
  //       'activePath':['create-send-coupon', 'send-coupon-detail']
  //     }
  //   ]
  // }, {
  //   'title':'资源管理',
  //   'icon':'ziyuan',
  //   'subMenu':[
  //     {
  //       'title':'云服务(DC2)',
  //       'route':{name: 'resources-dc2'},
  //       'activePath':['dc2-']
  //     }, {
  //       'title':'弹性IP(EIP)',
  //       'route':{name: 'resources-eip'},
  //       'activePath':['eip']
  //     }, {
  //       'title':'快照(SNAPSHOT)',
  //       'route':{name: 'resources-snapshot'},
  //       'activePath':['snapshot']
  //     }, {
  //       'title':'EBS',
  //       'route':{name: 'resources-ebs'},
  //       'activePath':['ebs']
  //     }, {
  //       'title':'VPC',
  //       'route':{name: 'resources-vpc'},
  //       'activePath':['vpc']
  //     }, {
  //       'title':'SG',
  //       'route':{name: 'resources-sg'},
  //       'activePath':['sg']
  //     }, {
  //       'title':'SLB',
  //       'route':{name: 'resources-slb'},
  //       'activePath':['slb']
  //     }, {
  //       'title':'MySQL',
  //       'icon':'database',
  //       'subMenu':[
  //         {
  //           'title':'实例管理',
  //           'route':{name: 'resources-mysql'},
  //           'activePath':['mysql']
  //         }, {
  //           'title':'任务列表',
  //           'route':{name: 'resources-job-list'}
  //         }, {
  //           'title':'DSA',
  //           'route':{name: 'dsa-vip'}
  //         }
  //       ]
  //     }, {
  //       'title':'S3',
  //       'route':{name: 'resources-s3'},
  //       'activePath':['s3']
  //     }, {
  //       'title':'Redis',
  //       'route':{name: 'resources-redis'},
  //       'activePath':['redis']
  //     }
  //   ]
  // }, {
  //   'title':'备案管理',
  //   'icon':'icp',
  //   'subMenu':[
  //     {
  //       'title':'审核单管理',
  //       'route':{name: 'icp-index'},
  //       'activePath':['icp-detail', 'icp-records']
  //     }, {
  //       'title':'幕布管理',
  //       'route':{name: 'icp-screens'},
  //     }
  //   ]
  // }, {
  //   'title':'权限管理',
  //   'icon':'quanxian',
  //   'subMenu':[
  //     {
  //       'title':'权限规则',
  //       'route':{name: 'iam-permissions'},
  //     }, {
  //       'title':'资源规则',
  //       'route':{name: 'iam-resources'},
  //       'activePath':['iam-create-resource']
  //     }, {
  //       'title':'用户组管理',
  //       'route':{name: 'iam-groups'}
  //     }, {
  //       'title':'用户管理',
  //       'route':{name: 'iam-users'},
  //     }, {
  //       'title':'角色管理',
  //       'route':{name: 'iam-roles'},
  //       'activePath':['role-bind-resource-rule']
  //     }
  //   ]
  // }, {
  //   'title':'控制台',
  //   'icon':'screen',
  //   'subMenu':[
  //     {
  //       'title':'模拟登陆',
  //       'route':{name: 'didiyun'},
  //     }
  //   ]
  // }, {
  //   'title':'Offering管理',
  //   'icon':'project',
  //   'subMenu':[
  //     {
  //       'title':'产品管理',
  //       'route':{name: 'offerings-product'},
  //     }, {
  //       'title':'规格管理',
  //       'route':{name: 'offerings-commodity'},
  //     }, {
  //       'title':'牌价管理',
  //       'route':{name: 'offerings-price'},
  //     }, {
  //       'title':'大客户授权',
  //       'route':{name: 'offerings-authority'},
  //     }, {
  //       'title':'大客户折扣',
  //       'route':{name: 'offerings-specified-price'},
  //     }
  //   ]
  // }, {
  //   'title':'API云市场',
  //   'icon':'web__APIfangwen',
  //   'subMenu':[
  //     {
  //       'title':'切换用户',
  //       'route':{name: 'gateway-owner'},
  //     },
  //     {
  //       'title':'官网文案管理 ',
  //       'subMenu':[
  //         {
  //           'title':'官网-介绍',
  //           'route':{name: 'api-cmarket-add'},
  //         },
  //         {
  //           'title':'官网-API',
  //           'route':{name: 'api-cmarket-api'},
  //         },
  //         {
  //           'title':'官网-API组',
  //           'route':{name: 'api-cmarket-group'},
  //         }
  //       ]
  //     },
  //     {
  //       'title':'API接入管理',
  //       'subMenu':[
  //         {
  //           'title':'Group',
  //           'route':{name: 'gateway-group'},
  //         }, {
  //           'title':'Domain',
  //           'route':{name: 'gateway-domain'},
  //         }, {
  //           'title':'Api',
  //           'route':{name: 'gateway-api'},
  //         }, {
  //           'title':'Version',
  //           'route':{name: 'gateway-version'},
  //         }
  //       ]
  //     }
  //   ]
  // }, {
  //   'title':'工单系统',
  //   'icon':'ticket',
  //   'subMenu':[
  //     {
  //       'title':'我的申请',
  //       'route':{name: 'application'},
  //     }, {
  //       'title':'我的审批',
  //       'badge':'ticket',
  //       'route':{name: 'todos'},
  //     }
  //   ]
  // }, {
  //   'title':'实用工具',
  //   'icon':'screen',
  //   'subMenu':[
  //     {
  //       'title':'dc2诊断',
  //       'route':{name: 'tools-diagnose'},
  //     },
  //     {
  //       'title':'dc2详情',
  //       'route':{name: 'tools-info'},
  //     }
  //   ]
  // }, 
]

function getIndex(menuList, url){
  for(var i=0;i<menuList.length;i++){
    if(menuList[i].subMenu){
      let subIndex = getIndex(menuList[i].subMenu, url)
      if(subIndex!=undefined){
        return i+'-'+subIndex;
      }
    }else{
      let routeName = menuList[i].route.name;
      let activePath = menuList[i].activePath || [];
      activePath.push(routeName);
      // 如果待检测路径为overview，必须url完全匹配，因为除了overview，还有好多包含overview的url
      if(activePath.some(item => item==='overview' ? url==='overview': url.includes(item))){
        return String(i);
      }
    }
  }
  return
}
export { sideMenu, getIndex };