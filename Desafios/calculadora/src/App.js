import react, { useState } from "react";

export default function App(){
  const [valorTela, setValorTela]=useState('')
  const [resultado, setResultado]=useState(0)
  const [acumulador, setAcumulador]=useState(false)
  const [operacao, setOperacao]=useState()
  const Tela=(valor, res)=>{
    return (
      <div style={cssTela}>
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    );
  }

  const Btn=(label, onClick)=>{
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }

  const addDigitoTela=(d)=>{
    if(( d == '+' || d== '-' || d == '*' || d == '/') && operacao){
      console.log("+-*/")
      setOperacao(false)
      setValorTela(resultado+d)
      return
    }
    if (operacao){
      setValorTela(d)
      setOperacao(false)
      return
    }
    const valorDigitadoTela=valorTela+d
    setValorTela(valorDigitadoTela)
  }


  const limparMemoria=()=>{
    setOperacao(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const Operacao=(oper)=>{
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperacao(false)
      return
    }
    try{
      const r=eval(valorTela)
      setAcumulador(r)
      setResultado(r)
      setOperacao(true)
    } catch {
      setResultado('ERROR')
    }
  }


  const cssContainer={
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    border:'1px solid #000'
  }

  const cssBotoes={
    flexDirection: 'row',
    flexWrap: 'wrap',


  }


  const cssTela={
    display:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#AB72EA',
    flexDirection:'column',
    width:260
  }

  const cssTelaOper={
    fontSize:25,
    color:'#fff',
    height:20,
  }


  const cssTelaRes={
    fontSize:40,
    color:'#fff',
    height:50,
  }

  const cssBtn={
    fontSize:30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#fff',
    color: '#000',
    borderColor:'#fff',
    outline:'none',

  }


  return (
    <>
    <div style={cssContainer}>
      <div>
        <img src="https://user-images.githubusercontent.com/98053054/150647892-e6aa9263-f8ce-4056-8d73-d2b3e3e61a6b.png" width="50" alt="icon"/>
        <img src="https://user-images.githubusercontent.com/98053054/150657891-1e476ad6-5357-44dd-ad6a-cc1a4883bd60.PNG" margin="10px" width="150" alt="logo"/>
      </div>

      {Tela(valorTela, resultado)}
      <div style={cssBotoes}>
        {Btn('AC', limparMemoria)}
        {Btn('(',()=>addDigitoTela('('))}
        {Btn(')',()=>addDigitoTela(')'))}
        {Btn('/',()=>addDigitoTela('/'))}
        {Btn('7',()=>addDigitoTela('7'))}
        {Btn('8',()=>addDigitoTela('8'))}
        {Btn('9',()=>addDigitoTela('9'))}
        {Btn('*',()=>addDigitoTela('*'))}
        {Btn('4',()=>addDigitoTela('4'))}
        {Btn('5',()=>addDigitoTela('5'))}
        {Btn('6',()=>addDigitoTela('6'))}
        {Btn('-',()=>addDigitoTela('-'))}
        {Btn('1',()=>addDigitoTela('1'))}
        {Btn('2',()=>addDigitoTela('2'))}
        {Btn('3',()=>addDigitoTela('3'))}
        {Btn('+',()=>addDigitoTela('+'))}
        {Btn('0',()=>addDigitoTela('0'))}
        {Btn('.',()=>addDigitoTela('.'))}
        {Btn('<-',()=>Operacao('bs'))}
        {Btn('=',()=>Operacao('='))}



      </div>
    </div>
    </>
  );
}
