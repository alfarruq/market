
import './style.css'

function ModelCard({data}) {
    
  return (
    <div className='model-card' >
      <img
        src={data?.img }
        alt={data?.title}
      />
      <h3>{data?.title}</h3>
    </div>
  );
}

export default ModelCard;
