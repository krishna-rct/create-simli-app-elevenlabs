# Create Simli App (ElevenLabs)
This starter is an example of how to create a composable Simli interaction that runs in a Next.js app.

 ## Usage
 1. Rename .env_sample to .env and paste your API keys: [SIMLI-API-KEY](https://www.simli.com/profile) and [ELEVENLABS-API-KEY](https://elevenlabs.io/app/settings/api-keys) <br/> If you want to try Simli but don't have API access to these third parties, ask in Discord and we can help you out with that ([Discord Link](https://discord.gg/yQx49zNF4d)). 
```js
NEXT_PUBLIC_SIMLI_API_KEY="SIMLI-API-KEY"
ELEVENLABS_API_KEY="ELEVENLABS-API-KEY"
``` 

2. Insall packages
```bash
npm install
```

3. Run
```bash
npm run dev
```

4. Customize your avatar's face and prompt by editing app/page.tsx. [Create your ElevenLabs agent](https://elevenlabs.io/app/conversational-ai/)
```js
const avatar = {
  elevenlabs_agentid: "ELEVEN-LABS-AGENT-ID",
  simli_faceid: "5514e24d-6086-46a3-ace4-6a7264e5cb7c",
};
```

## Characters
You can swap out the character by finding one that you like in the [docs](https://docs.simli.com/introduction), or [create your own](https://app.simli.com/) 

![alt text](media/image.png) ![alt text](media/image-4.png) ![alt text](media/image-2.png) ![alt text](media/image-3.png) ![alt text](media/image-5.png) ![alt text](media/image-6.png)

## Deploy on Vercel
An easy way to deploy your avatar interaction to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). 
