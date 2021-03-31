function proxyResponse(body, statusCode = 200) {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*'
    },
    statusCode: statusCode,
    body: JSON.stringify(body)
  }

}

module.exports = proxyResponse
