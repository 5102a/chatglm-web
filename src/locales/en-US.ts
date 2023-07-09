export default {
  common: {
    add: 'Add',
    addSuccess: 'Add Success',
    edit: 'Edit',
    editSuccess: 'Edit Success',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    save: 'Save',
    saveSuccess: 'Save Success',
    reset: 'Reset',
    action: 'Action',
    export: 'Export',
    exportSuccess: 'Export Success',
    import: 'Import',
    importSuccess: 'Import Success',
    clear: 'Clear',
    clearSuccess: 'Clear Success',
    yes: 'Yes',
    no: 'No',
    confirm: 'Confirm',
    download: 'Download',
    noData: 'No Data',
    wrong: 'Something went wrong, please try again later.',
    success: 'Success',
    failed: 'Failed',
    verify: 'Verify',
    unauthorizedTips: 'Unauthorized, please verify first.',
    about_head: 'The original authors of this project are Chanzhaoyu, WenJing, and NCZkevin. After being forked and modified by 5102a, it was open-sourced under the MIT license.',
    about_body: 'If you find this helpful, please give me a star on GitHub. If you would like to make a donate, please donate to the original author Chanzhaoyu. Thank you!',
  },
  chat: {
    newChatButton: 'New Chat',
    newChat: 'New Chat',
    placeholder: 'Ask me anything...(Shift + Enter = line break, "/" to trigger prompts)',
    placeholderMobile: 'Ask me anything...',
    copy: 'Copy',
    copied: 'Copied',
    copyCode: 'Copy Code',
    clearChat: 'Clear Chat',
    clearChatConfirm: 'Are you sure to clear this chat?',
    exportImage: 'Export Image',
    exportImageConfirm: 'Are you sure to export this chat to png?',
    exportSuccess: 'Export Success',
    exportFailed: 'Export Failed',
    usingKnowledge: 'Knowledge Mode',
    turnOnKnowledge: 'In the current mode, sending messages will use the knowledge stored in the knowledge base to provide an answer.',
    turnOffKnowledge: 'In the current mode, sending messages will not use the knowledge stored in the knowledge base to provide an answer.',
    usingContext: 'Context Mode',
    turnOnContext: 'In the current mode, sending messages will carry previous chat records.',
    turnOffContext: 'In the current mode, sending messages will not carry previous chat records.',
    deleteMessage: 'Delete Message',
    deleteMessageConfirm: 'Are you sure to delete this message?',
    deleteHistoryConfirm: 'Are you sure to clear this history?',
    clickToTalk: 'Click to talk',
    clickToSend: 'Click to send',
    recordingInProgress: '[Recording in progress...]',
    openMicrophoneFailedTitle: 'Microphone Opening Failed',
    openMicrophoneFailedText: 'HTTPS environment and permission are required',
    stopResponding: 'Stop Responding',
    preview: 'Preview',
    showRawText: 'Show as raw text',
  },
  setting: {
    setting: 'Setting',
    randomAvatar: 'Generate a random avatar',
    general: 'General',
    advance: 'Advance',
    about: 'About',
    avatarLink: 'Avatar Link',
    name: 'Name',
    description: 'Description',
    resetUserInfo: 'Reset UserInfo',
    theme: 'Theme',
    language: 'Language',

    chatgpt_model_title: 'model',
    chatgpt_memory_title: 'ChatGLM\'s memory capacity',
    chatgpt_memory_memo: 'The stronger the memory, the more context ChatGLM can remember during conversations, but it may consume more costs.',
    chatgpt_memory_choice_1: 'Normal Memory (1 logs)',
    chatgpt_memory_choice_2: 'Medium Memory (50 logs)',
    chatgpt_memory_choice_3: 'Strong Memory (all logs)',

    chatgpt_top_p_title: 'The personality of ChatGLM',
    chatgpt_top_p_1_memo: 'Tends to precise analysis, reducing the possibility of ChatGLM\'s nonsense.',
    chatgpt_top_p_2_memo: 'Balancing accuracy and creativity in responses.',
    chatgpt_top_p_3_memo: 'Brainstorming mode, tends to provide richer information.',
    chatgpt_top_p_choice_1: 'Accurate',
    chatgpt_top_p_choice_2: 'Balanced personality',
    chatgpt_top_p_choice_3: 'Exploratory',
    chatgpt_max_length_title: 'Max Length',
    chatgpt_temperature_title: 'Temperature',
    api: 'API',
    timeout: 'Timeout',
    socks: 'Socks',
  },
  server: {
    PromptIsEmpty: 'Hello! How can I assist you today?',
    NotComplyPolicy: 'Sorry, the content you have sent does not comply with our usage policy. Please note that our platform prohibits the publication of content that involves harassment, discrimination, violence, pornography, and other violations of laws, regulations, and social ethics. If you have any questions, please contact the developer for further assistance. Thank you.',
    SomethingWrong: 'Oops, something went wrong. Please try again later.',
    SomethingWrongInOpenaiGptApi: 'Oops, something went wrong in OpenAI GPT API. Please try again later.',
    SomethingWrongInOpenaiModerationApi: 'Oops, something went wrong in OpenAI Moderation API. Please try again later.',
    SomethingWrongInOpenaiWhisperApi: 'Oops, something went wrong in OpenAI Whisper API. Please try again later.',
  },
  store: {
    siderButton: 'Prompt Store',
    local: 'Local',
    online: 'Online',
    title: 'Title',
    description: 'Description',
    clearStoreConfirm: 'Whether to clear the data?',
    importPlaceholder: 'Please paste the JSON data here',
    addRepeatTitleTips: 'Title duplicate, please re-enter',
    addRepeatContentTips: 'Content duplicate: {msg}, please re-enter',
    editRepeatTitleTips: 'Title conflict, please revise',
    editRepeatContentTips: 'Content conflict {msg} , please re-modify',
    importError: 'Key value mismatch',
    importRepeatTitle: 'Title repeatedly skipped: {msg}',
    importRepeatContent: 'Content is repeatedly skipped: {msg}',
    onlineImportWarning: 'Note: Please check the JSON file source!',
    downloadError: 'Please check the network status and JSON file validity',
  },
}
