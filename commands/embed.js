// at the top of your file
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('embed')
		.setDefaultMemberPermissions('0')
		.setDescription('return an embed'),
	async execute(interaction) {
		// inside a command, event listener, etc.
		const exampleEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('Le Serveur à son propre BOT')
			.setURL('https://discord.js.org/')
			.setAuthor({ name: 'Pro Otaku', iconURL: 'https://i.imgur.com/AfFp7pu.png' })
			.setDescription('Some description here')
			.setThumbnail('https://i.imgur.com/AfFp7pu.png')
			.addFields(
				{ name: 'Regular field title', value: 'Some value here' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
				{ name: 'Inline field title', value: 'Some value here', inline: true },
			)
			.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
			.setImage('https://i.imgur.com/AfFp7pu.png')
			.setTimestamp()
			.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

		await interaction.reply({
			embeds: [exampleEmbed],
		});
	},
};