const attachAnswerSet = ({ answer, id }) => ({ id, answerSet: [answer] });

const getProductWiseAnswerList = (list) => {
  const initialList = { userIdList: [], productMapper: new Map() };
  const productNameList = {}; //  {1:'p1', 2: 'p2', 3: 'p3'};
  const questionNameList = {}; // {100: 'q1', 101: 'q2', 103: 'q3'}
  const productWiseAnswer = list.reduce((prev, next) => {
    if (prev.productMapper.size === 0) {
      next.productList.forEach((product) => {
        Object.assign(productNameList, { [product.id]: product.name });
        prev.productMapper.set(product.id, product.questionList.map(attachAnswerSet));
      });
    } else {
      next.productList.forEach((nextProduct) => {
        const { id } = nextProduct;
        const prevProductList = prev.productMapper.get(id);
        nextProduct.questionList.forEach((nextQueList) => {
          prevProductList.forEach((prevQueList) => {
            if (nextQueList.id === prevQueList.id) {
              prevQueList.answerSet.push(nextQueList.answer);
            }
          });
        });
        prev.productMapper.set(id, prevProductList);
      });
    }
    prev.userIdList.push(next.userId);
    return prev;
  }, initialList);
  return { productWiseAnswer, productNameList, questionNameList };
};

const list = [
  {
    userId: 'u1',
    productList: [
      {
        id: 1,
        name: 'p1',
        questionList: [
          { id: 101, question: 'q1', answer: 1 },
          { id: 102, question: 'q2', answer: 2 },
          { id: 103, question: 'q3', answer: 3 },
          { id: 104, question: 'q4', answer: null },
          { id: 105, question: 'q5', answer: -1 },
        ],
      },
      {
        id: 2,
        name: 'p2',
        questionList: [
          { id: 101, question: 'q1', answer: -1 },
          { id: 102, question: 'q2', answer: 2 },
          { id: 103, question: 'q3', answer: 0 },
          { id: 104, question: 'q4', answer: null },
          { id: 105, question: 'q5', answer: 3 },
        ],
      },
      {
        id: 3,
        name: 'p3',
        questionList: [
          { id: 101, question: 'q1', answer: -1 },
          { id: 102, question: 'q2', answer: 1 },
          { id: 103, question: 'q3', answer: null },
          { id: 104, question: 'q4', answer: 0 },
          { id: 105, question: 'q5', answer: 2 },
        ],
      },
    ],
  },
  {
    userId: 'u2',
    productList: [
      {
        id: 1,
        name: 'p1',
        questionList: [
          { id: 101, question: 'q1', answer: 1 },
          { id: 102, question: 'q2', answer: 0 },
          { id: 103, question: 'q3', answer: 3 },
          { id: 104, question: 'q4', answer: 2 },
          { id: 105, question: 'q5', answer: -1 },
        ],
      },
      {
        id: 2,
        name: 'p2',
        questionList: [
          { id: 101, question: 'q1', answer: 1 },
          { id: 102, question: 'q2', answer: 2 },
          { id: 103, question: 'q3', answer: null },
          { id: 104, question: 'q4', answer: 3 },
          { id: 105, question: 'q5', answer: 3 },
        ],
      },
      {
        id: 3,
        name: 'p3',
        questionList: [
          { id: 101, question: 'q1', answer: null },
          { id: 102, question: 'q2', answer: 1 },
          { id: 103, question: 'q3', answer: 2 },
          { id: 104, question: 'q4', answer: -1 },
          { id: 105, question: 'q5', answer: 0 },
        ],
      },
    ],
  },
  {
    userId: 'u3',
    productList: [
      {
        id: 1,
        name: 'p1',
        questionList: [
          { id: 101, question: 'q1', answer: -1 },
          { id: 102, question: 'q2', answer: 1 },
          { id: 103, question: 'q3', answer: 3 },
          { id: 104, question: 'q4', answer: 0 },
          { id: 105, question: 'q5', answer: null },
        ],
      },
      {
        id: 2,
        name: 'p2',
        questionList: [
          { id: 101, question: 'q1', answer: 1 },
          { id: 102, question: 'q2', answer: 0 },
          { id: 103, question: 'q3', answer: 3 },
          { id: 104, question: 'q4', answer: null },
          { id: 105, question: 'q5', answer: 3 },
        ],
      },
      {
        id: 3,
        name: 'p3',
        questionList: [
          { id: 101, question: 'q1', answer: null },
          { id: 102, question: 'q2', answer: null },
          { id: 103, question: 'q3', answer: -1 },
          { id: 104, question: 'q4', answer: -1 },
          { id: 105, question: 'q5', answer: 0 },
        ],
      },
    ],
  },
];

const output = getProductWiseAnswerList(list);
console.log({ output });
