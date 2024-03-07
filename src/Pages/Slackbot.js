import React from 'react'
import Header from '../components/Header.js/Header'
import Sidebar from '../components/Sidebar'
import { FaHome } from 'react-icons/fa'

const Slackbot = () => {
  return (
    <main className="jsx-3716246323 __variable_e52a9e __variable_2c91d1">
    <div className="relative antialiased text-gray-500 dark:text-gray-400" bis_skin_checked="1"><span className="fixed inset-0 bg-background-light dark:bg-background-dark"></span><span className="fixed inset-0"></span>
        <div id="navbar" className="z-30 fixed top-0 w-full backdrop-blur flex-none transition-colors duration-500 supports-backdrop-blur:bg-background-light/60 dark:bg-transparent" bis_skin_checked="1"><div className="relative max-w-8xl mx-auto lg:border-b lg:border-gray-500/5 dark:border-gray-50/[0.06]" bis_skin_checked="1">
            <Header /><div className="flex items-center py-4 px-5 border-b border-gray-500/10 lg:hidden dark:border-gray-50/[0.06]" bis_skin_checked="1"><button type="button" className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"><span className="sr-only">Navigation</span><svg className="h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg></button><div className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0 space-x-3" bis_skin_checked="1"><div className="flex items-center space-x-3" bis_skin_checked="1">
                <span>Welcome to Danswer</span><svg width="3" height="24" viewBox="0 -9 3 24" className="h-5 rotate-0 overflow-visible fill-gray-400"><path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg><FaHome /></div><div className="font-semibold text-gray-900 truncate dark:text-gray-200" bis_skin_checked="1">Introduction</div></div></div></div></div><div bis_skin_checked="1"><div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8" bis_skin_checked="1">
                    <Sidebar />
                </div>
            <div className="lg:pl-[20rem]" id="content-container" bis_skin_checked="1"><div className="flex flex-row items-stretch gap-12 pt-[9.5rem] lg:pt-[6.5rem]" bis_skin_checked="1">

               <div className="relative grow mx-auto px-1 overflow-hidden xl:-ml-12 xl:pl-14" id="content-area" bis_skin_checked="1"><header id="header" className="relative"><div className="mt-0.5 space-y-2.5" bis_skin_checked="1"><div className="flex h-5" bis_skin_checked="1"><div className="flex-1 text-primary dark:text-primary-light text-sm font-semibold" bis_skin_checked="1">Welcome to Danswer</div></div><div className="flex items-center" bis_skin_checked="1"><h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200">Slack Bot Setup</h1></div></div><div className="mt-2 text-lg prose prose-gray dark:prose-invert" bis_skin_checked="1"><p>How to set up a Slack bot to automatically answer questions</p></div></header><div className="flex flex-col gap-8" bis_skin_checked="1"><div className="flex flex-col gap-6 xl:hidden" bis_skin_checked="1"></div></div><div className="mt-8 relative prose prose-gray dark:prose-invert" bis_skin_checked="1"><h2 className="flex whitespace-pre-wrap group" id="danswerbot-introduction"><div className="absolute" bis_skin_checked="1"><a href="#danswerbot-introduction" className="-ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100" aria-label="Navigate to header">​<div className="w-6 h-6 text-gray-400 rounded-md flex items-center justify-center zinc-box bg-white ring-1 ring-gray-400/30 dark:ring-gray-700/25 hover:ring-gray-400/60 dark:hover:ring-white/20" bis_skin_checked="1"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></div></a></div><span className="cursor-pointer">DanswerBot Introduction</span></h2>
<p>Danswer will connect to your Slack and listen for messages to answer.</p>
<p>You can easily configure rules for what channels Danswer should respond in, what knowledge sets should back each
configured channel, and set filters to respond or not respond to different types of messages.</p>
<p>When Danswer identifies valid questions, it will respond in the message thread with:</p>
<ul role="list">
<li>An LLM generated answer</li>
<li>Quotes of the most relevant excerpts</li>
<li>Sources with highlighted keywords</li>
</ul>
<p><span aria-owns="rmiz-modal-8e13a18fe9f3" data-rmiz=""><span data-rmiz-content="found" style={{visibility: "visible"}}><img src="https://mintlify.s3-us-west-1.amazonaws.com/danswer/images/slack_bot/SlackBot.png" alt="SlackBot" /></span><span data-rmiz-ghost="" style={{height: "541px", left: "0px", width: "532px", top: "0px"}}><button aria-label="Expand image: SlackBot" data-rmiz-btn-zoom="" type="button"><svg aria-hidden="true" data-rmiz-btn-zoom-icon="true" fill="currentColor" focusable="false" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"></path></svg></button></span></span></p>
<p>Danswer also provides a configuration page so you can create custom settings for each slack channel
(or you can just use the default settings for all your channels).</p>
<p><span aria-owns="rmiz-modal-397ed5b6b151" data-rmiz=""><span data-rmiz-content="found" style={{visibility: "visible"}}><img src="https://mintlify.s3-us-west-1.amazonaws.com/danswer/images/slack_bot/SlackBotConfig.png" alt="SlackBotConfig" /></span><span data-rmiz-ghost="" style={{height: "476px", left: "0px", width: "532px", top: "0px"}}><button aria-label="Expand image: SlackBotConfig" data-rmiz-btn-zoom="" type="button"><svg aria-hidden="true" data-rmiz-btn-zoom-icon="true" fill="currentColor" focusable="false" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"></path></svg></button></span></span></p>
<p>Since we are using Web Sockets, Danswer is able to initiate the connection. This means that this is able
to work even if you are running Danswer inside a firewall protected VPC.</p>
<h2 className="flex whitespace-pre-wrap group" id="setting-up"><div className="absolute" bis_skin_checked="1"><a href="#setting-up" className="-ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100" aria-label="Navigate to header">​<div className="w-6 h-6 text-gray-400 rounded-md flex items-center justify-center zinc-box bg-white ring-1 ring-gray-400/30 dark:ring-gray-700/25 hover:ring-gray-400/60 dark:hover:ring-white/20" bis_skin_checked="1"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></div></a></div><span className="cursor-pointer">Setting up</span></h2>
<h3 className="flex whitespace-pre-wrap group" id="authorization"><div className="absolute" bis_skin_checked="1"><a href="#authorization" className="-ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100" aria-label="Navigate to header">​<div className="w-6 h-6 text-gray-400 rounded-md flex items-center justify-center zinc-box bg-white ring-1 ring-gray-400/30 dark:ring-gray-700/25 hover:ring-gray-400/60 dark:hover:ring-white/20" bis_skin_checked="1"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></div></a></div><span className="cursor-pointer">Authorization</span></h3>
<p><strong>Note:</strong> You must be an admin of the Slack workspace to set up the Slack bot.</p>
<ol role="list">
<li>Navigate and sign in to <a href="https://api.slack.com/apps" target="_blank" rel="noreferrer">https://api.slack.com/apps</a>.</li>
<li>Create a new Slack app:
<ul role="list">
<li>Click the <strong>Create New App</strong> button in the top right.</li>
<li>Select <strong>From an app manifest</strong> option.</li>
<li>Select the relevant workspace from the dropdown and click <strong>Next</strong>.</li>
</ul>
</li>
</ol>
<p><span aria-owns="rmiz-modal-7689b729d7d5" data-rmiz=""><span data-rmiz-content="found" style={{visibility: "visible"}}><img src="https://mintlify.s3-us-west-1.amazonaws.com/danswer/images/connectors/slack/SlackApp.png" alt="SlackApp" /></span><span data-rmiz-ghost="" style={{height: "403px", left: "0px", width: "532px", top: "0px"}}><button aria-label="Expand image: SlackApp" data-rmiz-btn-zoom="" type="button"><svg aria-hidden="true" data-rmiz-btn-zoom-icon="true" fill="currentColor" focusable="false" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"></path></svg></button></span></span></p>
<ol start="3" role="list">
<li>Copy the following manifest into the text box</li>
</ol>
<div className="mt-5 mb-8 not-prose bg-[#0F1117] dark:bg-codeblock rounded-xl dark:ring-1 dark:ring-gray-800/50 relative" bis_skin_checked="1"><div className="group z-10 absolute mt-0.5 top-4 right-4" bis_skin_checked="1"><button className="h-7 w-7 flex items-center justify-center rounded-md"><svg className="fill-gray-700 group-hover:fill-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.5H9C9.275 14.5 9.5 14.275 9.5 14V12H11V14C11 15.1031 10.1031 16 9 16H2C0.896875 16 0 15.1031 0 14V7C0 5.89687 0.896875 5 2 5H4V6.5H2C1.725 6.5 1.5 6.725 1.5 7V14C1.5 14.275 1.725 14.5 2 14.5ZM7 11C5.89687 11 5 10.1031 5 9V2C5 0.896875 5.89687 0 7 0H14C15.1031 0 16 0.896875 16 2V9C16 10.1031 15.1031 11 14 11H7Z"></path></svg></button><div className="absolute top-11 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block text-white rounded-lg px-1.5 py-0.5 text-xs bg-primary-dark" bis_skin_checked="1">Copy</div></div><div className="text-gray-50 p-5 min-w-full text-sm leading-6 overflow-x-auto children:!my-0 children:!shadow-none children:!bg-transparent" style={{fontVariantLigatures: "none"}} bis_skin_checked="1"><pre><code>display_information:
  name: DanswerBot
  description: I help answer questions!
features:
  app_home:
    home_tab_enabled: false
    messages_tab_enabled: true
    messages_tab_read_only_enabled: false
  bot_user:
    display_name: DanswerBot
    always_online: true
  slash_commands:
    - command: /danswer
      description: Get back a private answer!
      usage_hint: Put your question here!
      should_escape: false
oauth_config:
  scopes:
    bot:
      - app_mentions:read
      - channels:history
      - channels:join
      - channels:read
      - chat:write
      - commands
      - groups:history
      - groups:read
      - im:history
      - im:read
      - mpim:history
      - reactions:write
      - users:read.email
      - users:read
settings:
  event_subscriptions:
    bot_events:
      - app_mention
      - message.channels
      - message.groups
      - message.im
      - message.mpim
  interactivity:
    is_enabled: true
  org_deploy_enabled: false
  socket_mode_enabled: true
  token_rotation_enabled: false
</code></pre></div></div>
<ol start="5" role="list">
<li>Click the <strong>Create</strong> button.</li>
<li>Generate an <code>App-level Token</code>, following the guide <a href="https://api.slack.com/apis/connections/socket#token" target="_blank" rel="noreferrer">here</a>.
Add the <code>connections:write</code> scope to the app-level token and click <strong>Generate</strong>.
Copy this somewhere safe for now, as you will need this later to initiate the Web Socket-based connection to Slack.</li>
<li>In the app page, navigate to the <strong>OAuth &amp; Permissions</strong> tab under the <strong>Features</strong> header.</li>
<li>Under <strong>OAuth Tokens for Your Workspace</strong>, select <code>Install to Workspace</code> and Allow the app.
<span aria-owns="rmiz-modal-768525794aad" data-rmiz=""><span data-rmiz-content="found" style={{visibility: "visible"}}><img src="https://mintlify.s3-us-west-1.amazonaws.com/danswer/images/slack_bot/DanswerBotInstall.png" alt="DanswerBotInstall" /></span><span data-rmiz-ghost="" style={{height: "439px", left: "-217px", width: "500px", top: "55px"}}><button aria-label="Expand image: DanswerBotInstall" data-rmiz-btn-zoom="" type="button"><svg aria-hidden="true" data-rmiz-btn-zoom-icon="true" fill="currentColor" focusable="false" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"></path></svg></button></span></span></li>
<li>Copy the <strong>Bot User OAuth Token</strong>, this will be needed later to enable us to respond to messages as DanswerBot.</li>
</ol>
<h3 className="flex whitespace-pre-wrap group" id="setting-danswer-to-use-it"><div className="absolute" bis_skin_checked="1"><a href="#setting-danswer-to-use-it" className="-ml-10 flex items-center opacity-0 border-0 group-hover:opacity-100" aria-label="Navigate to header">​<div className="w-6 h-6 text-gray-400 rounded-md flex items-center justify-center zinc-box bg-white ring-1 ring-gray-400/30 dark:ring-gray-700/25 hover:ring-gray-400/60 dark:hover:ring-white/20" bis_skin_checked="1"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></div></a></div><span className="cursor-pointer">Setting Danswer to use it</span></h3>
<p>Start by finding the admin page in the top right of the Danswer web UI.
<span aria-owns="rmiz-modal-147da49cb1f1" data-rmiz=""><span data-rmiz-content="found" style={{visibility: "visible"}}><img src="https://mintlify.s3-us-west-1.amazonaws.com/danswer/images/slack_bot/DanswerAdminButton.png" alt="DanswerAdminButton" /></span><span data-rmiz-ghost="" style={{height: "398px", left: "-498px", width: "532px", top: "55px"}}><button aria-label="Expand image: DanswerAdminButton" data-rmiz-btn-zoom="" type="button"><svg aria-hidden="true" data-rmiz-btn-zoom-icon="true" fill="currentColor" focusable="false" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"></path></svg></button></span></span></p>
<p>On the left hand menu of the admin page, navigate to the bottom to <strong>Bots</strong>.</p>
<p>Provide your Slack Tokens and Danswer will start to respond to your slack channels after a short startup delay.
<span aria-owns="rmiz-modal-42b2f568a415" data-rmiz=""><span data-rmiz-content="found" style={{visibility: "visible"}}><img src="https://mintlify.s3-us-west-1.amazonaws.com/danswer/images/slack_bot/SlackBotTokens.png" alt="SlackBotTokens" /></span><span data-rmiz-ghost="" style={{height: "390px", left: "-253px", width: "532px", top: "55px"}}><button aria-label="Expand image: SlackBotTokens" data-rmiz-btn-zoom="" type="button"><svg aria-hidden="true" data-rmiz-btn-zoom-icon="true" fill="currentColor" focusable="false" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"></path></svg></button></span></span></p>
<p>There are also a set of less often used / more advanced configuration options available via environment
variables that can set things like how many “Reference Documents” to show per answer, etc.
Refer to the available configs
<a href="https://github.com/danswer-ai/danswer/blob/main/backend/danswer/configs/danswerbot_configs.py" target="_blank" rel="noreferrer">here</a></p></div><div className="leading-6 mt-14" bis_skin_checked="1"><div className="mb-12 px-0.5 flex items-center text-sm font-semibold text-gray-700 dark:text-gray-200" bis_skin_checked="1"><a className="flex items-center space-x-3 group" href="/resourcing"><svg viewBox="0 0 3 6" className="h-1.5 stroke-gray-400 overflow-visible group-hover:stroke-gray-600 dark:group-hover:stroke-gray-300"><path d="M3 0L0 3L3 6" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span className="group-hover:text-gray-900 dark:group-hover:text-white">Resourcing</span></a><a className="flex items-center ml-auto space-x-3 group" href="/gen_ai_configs/overview"><span className="group-hover:text-gray-900 dark:group-hover:text-white">GenAI Overview</span><svg viewBox="0 0 3 6" className="rotate-180 h-1.5 stroke-gray-400 overflow-visible group-hover:stroke-gray-600 dark:group-hover:stroke-gray-300"><path d="M3 0L0 3L3 6" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div><footer className="justify-between pt-10 border-t border-gray-100 sm:flex dark:border-gray-800/50 pb-28"><div className="flex mb-6 space-x-6 sm:mb-0" bis_skin_checked="1">
<a href="https://github.com/danswer-ai/danswer" target="_blank"><span className="sr-only">github</span><svg className="w-5 h-5 bg-gray-400 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-400" style={{maskImage: "url(https://mintlify.b-cdn.net/v6.5.1/brands/github.svg)", maskRepeat: "no-repeat", maskPosition: "center center"}}></svg></a><a href="https://twitter.com/DanswerAI" target="_blank"><span className="sr-only">twitter</span><svg className="w-5 h-5 bg-gray-400 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-400" style={{maskImage: "url(https://mintlify.b-cdn.net/v6.5.1/brands/twitter.svg)", maskRepeat: "no-repeat", maskPosition: "center center"}}></svg></a><a href="https://linkedin.com/company/danswerai" target="_blank"><span className="sr-only">linkedin</span><svg className="w-5 h-5 bg-gray-400 dark:bg-gray-500 hover:bg-gray-500 dark:hover:bg-gray-400" style={{maskImage: "url(https://mintlify.b-cdn.net/v6.5.1/brands/linkedin.svg)", maskRepeat: "no-repeat", maskPosition: "center center"}}></svg></a></div><div className="sm:flex" bis_skin_checked="1"><a href="https://mintlify.com?utm_campaign=poweredBy&amp;utm_medium=docs&amp;utm_source=docs.danswer.dev" target="_blank" rel="noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Powered by Mintlify</a></div></footer></div></div>

                <div className="z-10 hidden xl:flex flex-none pl-10 w-[19rem]" id="table-of-contents" bis_skin_checked="1"><ul className="fixed text-gray-700 text-sm leading-6 w-[16.5rem] overflow-y-auto h-[calc(100%-7rem)]"><li><a href="#danswerbot-introduction" className="py-1 block font-medium font-medium text-primary dark:text-primary-light">DanswerBot Introduction</a></li><li><a href="#setting-up" className="py-1 block font-medium hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">Setting up</a></li><li style={{marginLeft: "1rem"}}><a href="#authorization" className="group flex items-start py-1 whitespace-pre-wrap text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">Authorization</a></li><li style={{marginLeft: "1rem"}}><a href="#setting-danswer-to-use-it" className="group flex items-start py-1 whitespace-pre-wrap text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">Setting Danswer to use it</a></li></ul></div></div></div></div></div>


</main>
  )
}

export default Slackbot