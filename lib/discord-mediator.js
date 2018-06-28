const Discord = require('discord.js')

// const catDiscord = require('./index.js').catDiscord

class DiscordMediator {

    constructor(channel_id) {
        this.channel_id = channel_id
        this.client = new Discord.Client()
    }

    getClient() {
        return this.client
    }

    login(token) {
        this.client.login(token)
    }

    /**
     * Send a message to the discord channel specified in
     * channel_id.
     *
     * @param {string} message Message to send via discord
     */
    async message(message) {
        const msg = await this.client.channels
              .find('id', this.channel_id)
              .send(message)
        // catDiscord.debug(() => `sent message: ${msg.content}`)
    }

    // TODO: document
    async embed(title, fields) {
        await this.client.channels
            .find('id', this.channel_id)
            .send({embed: {
                title: title,
                fields: fields,
                timestamp: new Date()
            }})
        // catDiscord.debug(() => `sent embed: ${title}`)
    }
}

module.exports = DiscordMediator
