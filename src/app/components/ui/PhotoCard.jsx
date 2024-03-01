import Image from "next/image";


function PhotoCard() {
  return (
    <article>
      <Image
        className=
        src=
        width=
        height=
        alt= 
      />
      <h3 className={styles.doctorOrdinalNumber}>{doctor.doctor}</h3>
      <h3 className={styles.actorName}>{doctor.actor}</h3>
      <time className={styles.screenTime}>{doctor.screen_time}</time>
      <br />
    </article>
  );
}

export default DoctorCard;