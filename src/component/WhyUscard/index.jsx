function WhyUscard(props) {
  return (
    <div class="col-sm-12 col-md-6 col-lg-3 card card-body">
      <div className="icon">
        <img src={props.img} alt="" />
      </div>
      <p>{props.title}</p>
      <p>{props.deskripsi}</p>
    </div>
  );
}

export default WhyUscard;
