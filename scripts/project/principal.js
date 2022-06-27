let valores = ["A1_1", "A1_2", "A1_3", "A2_1", "A2_2", "A2_3", "B_1", "B_2", "B_3", "C_1", "C_2", "C_3", "D1_1", "D1_2", "D1_3", "D2_1", "D2_2", "D2_3", "E_1", "E_2", "E_3"];

function shuffle(array) {
  var m = array.length, t, i;
  
  while (m) {

    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

runOnStartup(async runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => Start(runtime));
});

async function Start(runtime)
{
	let textos = runtime.objects.Textos.getAllInstances();
	let botoes = runtime.objects.Numeros.getAllInstances();
	let campos = runtime.objects.Campo.getAllInstances();
				
	for(var i = 0; i < textos.length; i++){
		campos[i].instVars.resposta = valores[i];
		textos[i].instVars.valor = valores[i];
	}
	
	shuffle(valores);
	
	for(var i = 0; i < botoes.length; i++){
		botoes[i].instVars.valor = valores[i];
	}
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	var r = runtime.objects.RespostasTexto.getFirstInstance();
	var v = runtime.globalVars.Respostas.toString();
	r.text = v;
}