// Quick script to list all content types in your Contentful space
// Run with: node test-contentful.js

const contentful = require('contentful');
const fs = require('fs');

// Read .env.local file
const envFile = fs.readFileSync('.env.local', 'utf8');
const envVars = {};
envFile.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    envVars[key.trim()] = value.trim();
  }
});

const client = contentful.createClient({
  space: envVars.CONTENTFUL_SPACE_ID,
  accessToken: envVars.CONTENTFUL_ACCESS_TOKEN,
});

async function listContentTypes() {
  try {
    console.log('🔍 Fetching content types from Contentful...\n');
    
    const contentTypes = await client.getContentTypes();
    
    console.log(`Found ${contentTypes.items.length} content type(s):\n`);
    
    contentTypes.items.forEach((ct) => {
      console.log('─────────────────────────────────────');
      console.log(`📋 Name: ${ct.name}`);
      console.log(`🆔 ID: ${ct.sys.id}`);
      console.log(`📝 Description: ${ct.description || 'None'}`);
      console.log(`📊 Fields: ${ct.fields.map(f => f.name).join(', ')}`);
      console.log('');
    });
    
    console.log('─────────────────────────────────────\n');
    console.log('✅ Use the ID value in your code, not the Name!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\nCheck:');
    console.error('  - CONTENTFUL_SPACE_ID is correct');
    console.error('  - CONTENTFUL_ACCESS_TOKEN is correct');
    console.error('  - Token has access to the space');
  }
}

listContentTypes();
