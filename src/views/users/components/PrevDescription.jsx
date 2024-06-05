/* eslint-disable react/prop-types */

const PrevDescription = ({ descriptions }) => {
  return (
    <div>
      {descriptions?.map((des, idx) => (
        <div key={idx} style={{ marginBottom: '10px' }}>
          <p><strong>Descripción:</strong> {des.description}</p>
          <p><strong>Prescripción:</strong> {des.prescription}</p>
        </div>
      ))}
    </div>
  );
};

export default PrevDescription;
