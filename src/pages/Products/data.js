import Mouse from '../../assets/imgs/mouse.jpg'
import Keyboard from '../../assets/imgs/keyboard.jpg'
import GPU from '../../assets/imgs/gpu.jpg'
import Proccessor from '../../assets/imgs/proccessor.jpg'
import Mousepad from '../../assets/imgs/mousepad.jpg'
import Mobo from '../../assets/imgs/mobo.jpg'
import Monitor from '../../assets/imgs/monitor.jpg'
import Hdd from '../../assets/imgs/hdd.jpg'
import Ssd from '../../assets/imgs/ssd.jpg'
import RAM from '../../assets/imgs/ram.jpg'

const ProductsList = [
  {
    id: 0,
    description: `O mouse funciona como um apontador sobre a tela/ecrã do computador e disponibiliza, 
      normalmente, quatro tipos de operações: movimento, clique, duplo clique e arrastar e largar. 
      Existem modelos com um, dois, três ou mais botões, cuja funcionalidade depende do ambiente de trabalho e do programa que está a ser utilizado.`,
    name: 'Mouse',
    value: 200,
    img: Mouse,
    quantity: 1,
  },
  {
    id: 1,
    description: `Na computação, o teclado de computador é um dispositivo que possui uma série de botões ou teclas,
     utilizado para inserir dados no computador. É um tipo de periférico de entrada utilizado pelo usuário para 
     a entrada manual no sistema de dados e comandos.`,
    name: 'Keyboard',
    value: 250,
    img: Keyboard,
    quantity: 1,
  },
  {
    id: 2,
    description:
      'Um monitor é um dispositivo de saída do computador, cuja função é transmitir informação ao utilizador através da imagem.',
    name: 'Monitor',
    value: 600,
    img: Monitor,
    quantity: 1,
  },
  {
    id: 3,
    description:
      'A memória RAM é um tipo de tecnologia que permite o acesso aos arquivos armazenados no computador. Diferentemente da memória do HD, a RAM não armazena conteúdos permanentemente.',
    name: 'RAM',
    value: 300,
    img: RAM,
    quantity: 1,
  },
  {
    id: 4,
    description:
      'O mouse pad é um tipo de apoio que parece uma almofada e que deve ficar embaixo do seu mouse pra fazer ele deslizar melhor.',
    name: 'MousePad',
    value: 150,
    img: Mousepad,
    quantity: 1,
  },
  {
    id: 5,
    description:
      'É a parte do computador responsável por conectar e interligar todos os componentes do computador, ou seja, processador com memória RAM, disco rígido, placa gráfica, entre outros.',
    name: 'Motherboard',
    value: 800,
    img: Mobo,
    quantity: 1,
  },
  {
    id: 6,
    description:
      'Os processadores (ou CPU, de Central Processing Unit - Unidade Central de Processamento) são chips responsáveis pela execução de cálculos, decisões lógicas e instruções que resultam em todas as tarefas que um computador pode fazer.',
    name: 'Proccessor',
    value: 1200,
    img: Proccessor,
    quantity: 1,
  },
  {
    id: 7,
    description:
      'Uma placa de vídeo é composta por diversos circuitos e elementos eletrônicos, porém seu papel mais importante é o de comportar um processador dedicado especialmente para a renderização de gráficos em tempo real.',
    name: 'GPU',
    value: 1500,
    img: GPU,
    quantity: 1,
  },
  {
    id: 8,
    description:
      'O disco rígido — HD (Hard Disk) ou HDD (Hard Disk Drive) — é o dispositivo de armazenamento de dados mais utilizado nos computadores.',
    name: 'HDD',
    value: 300,
    img: Hdd,
    quantity: 1,
  },
  {
    id: 9,
    description:
      'O SSD (Unidade de Estado Sólido, em português) é um tipo de armazenamento mais rápido e silencioso que os HDD (Unidade de Disco Rígido, em português) convencionais de computadores e notebooks.',
    name: 'SSD',
    value: 400,
    img: Ssd,
    quantity: 1,
  },
]

export default ProductsList
