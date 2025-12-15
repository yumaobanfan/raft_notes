import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/raft_notes/', 
  title: "分布式系统学习笔记",
  description: "Raft 算法与 MIT 6.824 实现",
  
  // 忽略文件名检查（防止因为文件名包含特殊字符报错）
  ignoreDeadLinks: true,

  vite: {
    assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG']
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Raft 笔记', link: '/raft/01. Raft 论文解读' }
    ],

    // 左侧侧边栏
    sidebar: [
      {
        text: 'Raft 分布式一致性',
        // 默认展开
        collapsed: false, 
        items: [
          { text: '01. Raft 论文解读', link: '/raft/01. Raft 论文解读' },
          { text: '02. Raft 代码总览', link: '/raft/02. Raft 代码总览' },
          { text: '03. Raft PartA 领导者选举', link: '/raft/03. Raft PartA 领导者选举' },
          { text: '04. Raft PartA 状态转换', link: '/raft/04. Raft PartA 状态转换' },
          { text: '05. Raft PartA 选举逻辑', link: '/raft/05. Raft PartA 选举逻辑' },
          { text: '06. Raft PartA 心跳逻辑', link: '/raft/06. Raft PartA 心跳逻辑' },
          { text: '07. Raft PartA 调试和小结', link: '/raft/07. Raft PartA 调试和小结' },
          { text: '08. Raft PartB 日志同步', link: '/raft/08. Raft PartB 日志同步' },
          { text: '09. Raft PartB 结构调整', link: '/raft/09. Raft PartB 结构调整' },
          { text: '10. Raft PartB 日志复制', link: '/raft/10. Raft PartB 日志复制' },
          { text: '11. Raft PartB 选举日志比较', link: '/raft/11. Raft PartB 选举日志比较' },
          { text: '12. Raft PartB 日志应用', link: '/raft/12. Raft PartB 日志应用' },
          { text: '13. Raft PartB 调试和小结', link: '/raft/13. Raft PartB 调试和小结' },
          { text: '14. Raft PartC 状态持久化', link: '/raft/14. Raft PartC 状态持久化' },
          { text: '15. Raft PartC 实现和优化', link: '/raft/15. Raft PartC 实现和优化' },
          { text: '16. Raft PartC 调试和小结', link: '/raft/16. Raft PartC 调试和小结' },
          { text: '17. Raft PartD 日志压缩', link: '/raft/17. Raft PartD 日志压缩' },
          { text: '18. Raft PartD 日志重构', link: '/raft/18. Raft PartD 日志重构' },
          { text: '19. Raft PartD 快照数据流', link: '/raft/19. Raft PartD 快照数据流' },
          { text: '20. Raft PartD 调试和小结', link: '/raft/20. Raft PartD 调试和小结' },
          { text: '21. Raft 的总结和优化', link: '/raft/21. Raft 的总结和优化' },
          { text: '22. 基于 raft 的分布式 KV 概述', link: '/raft/22 基于 raft 的分布式 KV 概述' },
          { text: '23. kvraft Client 端处理', link: '/raft/23 kvraft Client 端处理' },
          { text: '24. kvraft Server 端处理', link: '/raft/24 kvraft Server 端处理' },
          { text: '25. kvraft 的节点故障与重复请求', link: '/raft/25 kvraft 的节点故障与重复请求' },
          { text: '26. 带 snapshot 的 kvraft 实现', link: '/raft/26 带 snapshot 的 kvraft 实现' },
          { text: '27. 基于 multi raft 的 shardkv 概述', link: '/raft/27 基于 multi raft 的 shardkv 概述' },
          { text: '28. shard controller 的 Client 端处理', link: '/raft/28 shard controller 的 Client 端处理' },
          { text: '29. shard controller 的 Server 端处理', link: '/raft/29 shard controller 的 Server 端处理' },
          { text: '30. shard controller 的状态机处理', link: '/raft/30 shard controller 的状态机处理' },
          { text: '31. shardkv 单 Group 逻辑', link: '/raft/31 shardkv 单 Group 逻辑' },
          { text: '32. shardkv 配置变更', link: '/raft/32 shardkv 配置变更' },
          { text: '33. shardkv 分片迁移', link: '/raft/33 shardkv 分片迁移' },
          { text: '34. shardkv 分片清理', link: '/raft/34 shardkv 分片清理' },
          { text: '35. shardkv 补充修改', link: '/raft/35 shardkv 补充修改' },
        ]
      },
      {
        text: '附录',
        items: [
           { text: '附录1. 并发编程', link: '/raft/附录1. 并发编程' },
           { text: '附录2. 分布式调试', link: '/raft/附录2. 分布式调试' }
        ]
      }
    ],

    // 社交链接（可选）
    socialLinks: [
     { icon: 'github', link: 'https://github.com/yumaobanfan/raft_notes' }
    ],
    
    // 开启本地搜索
    search: {
      provider: 'local'
    }
  }
})
