// at the top of your file
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('embed')
		.setDefaultMemberPermissions('0')
		.addStringOption(Option =>
			Option
				.setName('titre')
				.setDescription('le test')
				.setRequired(true))
		.addStringOption(Option =>
			Option
				.setName('auteur')
				.setDescription('Auteur de cet embed')
				.setRequired(true))
		.addStringOption(Option =>
			Option
				.setName('image-auteur')
				.setDescription('Image-auteur de cet embed')
				.setRequired(true)
				.addChoices(
					{ name: 'Pro Otaku', value: '1' },
				))
		.addStringOption(Option =>
			Option
				.setName('lien-small-image')
				.setDescription('Lien pour image icone')
				.setRequired(false))
		.addStringOption(Option =>
			Option
				.setName('titre-texte')
				.setDescription('Simple texte')
				.setRequired(false))
		.addStringOption(Option =>
			Option
				.setName('texte1')
				.setDescription('Simple texte')
				.setRequired(false))
		.addStringOption(Option =>
			Option
				.setName('texte2')
				.setDescription('Simple texte')
				.setRequired(false))
		.addStringOption(Option =>
			Option
				.setName('texte3')
				.setDescription('Simple texte')
				.setRequired(false))
		.setDescription('return an embed'),

	async execute(interaction) {

		const titre = interaction.options.getString('titre') ?? 'aucun titre fourni';
		const titre_texte = interaction.options.getString('titre_texte');
		const texte1 = interaction.options.getString('texte1');
		const texte2 = interaction.options.getString('texte2');
		const texte3 = interaction.options.getString('texte3');
		const petite_image = interaction.options.getString('lien-small-image');
		const auteur = interaction.options.getString('image-auteur');

		console.log('la capture des valeurs suivante :');
		console.log(titre, auteur, titre_texte, texte1, texte2, texte3, petite_image);

		// inside a command, event listener, etc.
		const exampleEmbed = new EmbedBuilder()
			.setColor(0x7289DA)
			.setTitle(titre)
			.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' })
			.setURL('https://discord.js.org/')
			.setTimestamp();
		switch (auteur) {
		case '1':
			exampleEmbed.setAuthor({ name: 'Pro Otaku', iconURL: 'https://i.imgur.com/uwZkD1L.png' });
			console.log('Rajout de l auteur');
		}

		// Rajout d'une image d'icone
		if (petite_image !== null) {
			exampleEmbed.setThumbnail(petite_image);
		}

		if (titre_texte !== null) {
			exampleEmbed.addFields(
				{ name: titre_texte },
			);
		}
		// Rajout des champs texte
		if (texte1 !== null) {
			exampleEmbed.addFields(
				{ value: texte1 },
			);
		}
		if (texte2 !== null) {
			exampleEmbed.addFields(
				{ value: texte2 },
			);
		}
		if (texte3 !== null) {
			exampleEmbed.addFields(
				{ value: texte3 },
			);
		}

		exampleEmbed.setImage('https://i.imgur.com/AfFp7pu.png');

		await interaction.reply({
			embeds: [exampleEmbed],
		});
	},
};
