

function ConsultaSQL(pjsVariavel){

	try{

		//Variaveis

		var AConnection; // Objeto de conexão
		var strSQL; //String contendo a consulta SQL
		var RecSet; //objeto que contem o registro lido no banco
		var strNumeroSequancial; //o numero da sequencia


		///Criando o objeto de conexão com o banco
		AConnection = ADO.CreateADOConnection();
		
		///definir a string de conexão
		AConnection.ConnectionString = "Provider=SQLNCLI10;
									   Data Source=SSQLHML;
									     Server=10.51.0.25;
						      Database=bbm_credimaster_hml;
						                            uid=sa; 
										       pwd=TDI@2011;";


		strSQL = "SELECT max(cd_cli) cd_cli 
		            FROM t400unpe";

		AConnection.Open();

		AConnection.BeginTrans();

		///Busca o código do cliente recentemente inserido
		RecSet = AConnection.Execute_(strSQL);

		///Mover para o inicio dos registros
		RecSet.MoveFirst();

		while(!RecSet.EOF){

			strNumeroSequancial = RecSet.Fields("cd_cli").Value;
			RecSet.MoveNext();
		}

		AConnection.Close();

		return strNumeroSequancial;
		ProjectSuite.Variables.VariableByName(pjsVariavel) = strNumeroSequancial;
	} catch(exception){
		Log.Error("Erro ao buscar numero sequencial");
	}
	finally{

		if (AConnection.Connected) {
			AConnection.Close();

		}
	}
}


///Teste exploratório

function ConsultaSQL(pjsVariavel){

	try{

		//Variaveis

		var AConnection; // Objeto de conexão
		var strSQL; //String contendo a consulta SQL
		var RecSet; //objeto que contem o registro lido no banco
		var strNumeroCodigo; //o numero da sequencia


		///Criando o objeto de conexão com o banco
		AConnection = ADO.CreateADOConnection();
		
		///definir a string de conexão
		AConnection.ConnectionString = "Provider=SQLNCLI10;Data Source=SSQLHML\\SQL2008;Server=10.51.3.25;Database=unicred_basico_hml;Trusted_Connection=yes;";
    
    AConnection.LoginPrompt=false;
    
    strSQL = "SELECT max(cd_cli) cd_cli FROM t400unpe";
    
    AConnection.Open();
		AConnection.BeginTrans();
		//AConnection.BeginTrans();

		///Busca o código do cliente recentemente inserido
		RecSet = AConnection.Execute_(strSQL);

		///Mover para o inicio dos registros
		RecSet.MoveFirst();

		while(!RecSet.EOF){

			strNumeroCodigo = RecSet.Fields("cd_cli").Value;
			RecSet.MoveNext();
		}

		AConnection.Close();
    
    return strNumeroCodigo; 
    
		
	} catch(exception){
		Log.Error("Erro ao buscar numero do Codigo");
	}
	finally{

		if (AConnection.Connected) {
			AConnection.Close();

		}
  }ProjectSuite.Variables.VariableByName(pjsVariavel) = strNumeroCodigo;
}