// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request-promise')
cloud.init()

const api = 'http://musicapi.xiecheng.live/personalized'
const DATABASE_NAME = 'playList'
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const res = await request(api)
  const data = JSON.parse(res).result

  //开始插入数据
  for(let i = 0,len = data.length ;i<len; i++){
    const res = await db.collection(DATABASE_NAME).add({
      data:{
        ...data[i],
        createTime: db.serverDate()
      },
    })
    console.log(res)
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}