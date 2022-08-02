


const scriptsInEvents = {

		async FolhaDeEventos1_Event17_Act6(runtime, localVars)
		{
			let textos = runtime.objects.Textos.getAllInstances();
			let botoes = runtime.objects.Numeros.getAllInstances();
			let campos = runtime.objects.Campo.getAllInstances();
			
			for(var i = 0; i < campos.length; i++){
				var campo = campos[i];
				var valor = campo.instVars.valor;
				var resposta = campo.instVars.resposta;
				
				if(valor != resposta){
					var a1_2 = valor == 'A1_2' && resposta == 'A2_2';
					var a2_2 = valor == 'A2_2' && resposta == 'A1_2';
					if(!a1_2 && !a2_2){
						campo.instVars.respondido = false;
						runtime.globalVars.Respostas--;
			
						for(var j = 0; j < textos.length; j++){
							var texto = textos[j];
							if(texto.instVars.valor == campo.instVars.valor){
								console.log(texto.instVars.valor);
								texto.x = -200;
								texto.y = -400;
							}
						}
						for(var k = 0; k < textos.length; k++){
							var botao = botoes[k];
							if(botao.instVars.valor == campo.instVars.valor){
								botao.opacity = 100;
								botao.instVars.ativo = true;
							}
						}
					}
				}
			}
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

