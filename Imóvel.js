function Imóvel(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário, valor) {
	this.número = número;
	this.cidade = cidade;
	this.códigoPostalPrincipal = códigoPostalPrincipal;
	this.códigoPostalsecundário = códigoPostalsecundário;*/

	this.Localização = new Localização(rua, número, cidade, códigoPostalPrincipal, códigoPostalsecundário);
	this.valor = valor;
}
