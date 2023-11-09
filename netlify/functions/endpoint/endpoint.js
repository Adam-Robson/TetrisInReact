import fetch from 'fetch'
import dotenv from 'dotenv'

dotenv.config()

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
}

export async function handler(event, context) {
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    const data = await response.json()
    const json = JSON.stringify(data)

    return {
      statusCode: 200,
      headers,
      body: json
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' })
    }
  }
}
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    const data = await response.json()
    const json = JSON.stringify(data)

    return {
      statusCode: 200,
      headers,
      body: json
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' })
    }
  }
