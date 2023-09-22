import ReachersProsuct from "./ReachersProsuct";

const RechartsComponents = () => {

    const rebateData = [
        {
          id: 1,
          productName: 'A',
          rebateAmount: 10.00,
          expirationDate: '2023-12-31',
        },
        {
          id: 2,
          productName: 'B',
          rebateAmount: 15.50,
          expirationDate: '2023-11-30',
        },
        {
          id: 3,
          productName: 'C',
          rebateAmount: 8.25,
          expirationDate: '2023-10-15',
        },
        {
          id: 4,
          productName: 'D',
          rebateAmount: 20.00,
          expirationDate: '2023-09-30',
        },
        {
          id: 5,
          productName: 'E',
          rebateAmount: 12.75,
          expirationDate: '2023-11-15',
        },
        {
          id: 6,
          productName: 'F',
          rebateAmount: 18.99,
          expirationDate: '2023-12-15',
        },
      ];
    return (
        <div>
            {
                rebateData.map( product => <ReachersProsuct></ReachersProsuct>)
            }
        </div>
    );
};

export default RechartsComponents;