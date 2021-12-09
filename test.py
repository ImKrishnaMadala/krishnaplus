import cocktaildb 
import asyncio 
import aiohttp

# This is in literally a list, not in the form of a dict or string
async def list_of_categories():
  return await cocktaildb.categories()


