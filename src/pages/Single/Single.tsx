import { FC } from "react";
import { Carousel, Title } from "../../components";
import { withLayout } from "../../layout/Layout";

import styles from "./Single.module.css";

const dragon = {
  heat_shield: {
    material: "PICA-X",
    size_meters: 3.6,
    temp_degrees: 3000,
    dev_partner: "NASA",
  },
  launch_payload_mass: {
    kg: 6000,
    lb: 13228,
  },
  launch_payload_vol: {
    cubic_meters: 25,
    cubic_feet: 883,
  },
  return_payload_mass: {
    kg: 3000,
    lb: 6614,
  },
  return_payload_vol: {
    cubic_meters: 11,
    cubic_feet: 388,
  },
  pressurized_capsule: {
    payload_volume: {
      cubic_meters: 11,
      cubic_feet: 388,
    },
  },
  trunk: {
    trunk_volume: {
      cubic_meters: 14,
      cubic_feet: 494,
    },
    cargo: {
      solar_array: 2,
      unpressurized_cargo: true,
    },
  },
  height_w_trunk: {
    meters: 7.2,
    feet: 23.6,
  },
  diameter: {
    meters: 3.7,
    feet: 12,
  },
  first_flight: "2010-12-08",
  flickr_images: [
    "https://i.imgur.com/9fWdwNv.jpg",
    "https://live.staticflickr.com/8578/16655995541_078768dea2_b.jpg",
    "https://farm3.staticflickr.com/2815/32761844973_4b55b27d3c_b.jpg",
    "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg",
  ],
  name: "Dragon 1",
  type: "capsule",
  active: true,
  crew_capacity: 0,
  sidewall_angle_deg: 15,
  orbit_duration_yr: 2,
  dry_mass_kg: 4200,
  dry_mass_lb: 9300,
  thrusters: [
    {
      type: "Draco",
      amount: 18,
      pods: 4,
      fuel_1: "nitrogen tetroxide",
      fuel_2: "monomethylhydrazine",
      isp: 300,
      thrust: {
        kN: 0.4,
        lbf: 90,
      },
    },
  ],
  wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Dragon",
  description:
    "Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).",
  id: "5e9d058759b1ff74a7ad5f8f",
};

const Single: FC = () => {
  const renderRow = (
    title: string,
    value: number,
    unit: string,
    subValue: number,
    subUnit: string
  ) => {
    return (
      <div className={styles.info}>
        <div className={styles.item}>{title}</div>
        <div className={styles.value}>
          {value} {unit}{" "}
          <span>
            {subValue} {subUnit}
          </span>
        </div>
      </div>
    );
  };

  const overviewDragonEl = [
    renderRow(
      "HEIGHT",
      dragon.height_w_trunk.meters,
      "m",
      dragon.height_w_trunk.feet,
      "ft"
    ),
    renderRow(
      "DIAMETER",
      dragon.diameter.meters,
      "m",
      dragon.diameter.feet,
      "ft"
    ),
    renderRow(
      "CAPSULE VOLUME",
      dragon.pressurized_capsule.payload_volume.cubic_meters,
      "m",
      dragon.pressurized_capsule.payload_volume.cubic_feet,
      "ft"
    ),
    renderRow(
      "TRUNK VOLUME",
      dragon.trunk.trunk_volume.cubic_meters,
      "m",
      dragon.trunk.trunk_volume.cubic_feet,
      "ft"
    ),
    renderRow(
      "LAUNCH PAYLOAD MASS",
      dragon.launch_payload_mass.kg,
      "kg",
      dragon.launch_payload_mass.lb,
      "lb"
    ),
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.body}>
          <Carousel
            className={styles.carousel}
            images={dragon?.flickr_images}
          />
          <Title className={styles.title} tag="h2">
            {dragon.name}
          </Title>
          <p className={styles.disc}>{dragon.description}</p>
          <p className="">
            WiKi: <a href={dragon.wikipedia}>wikipedia</a>
          </p>
          <div className="d">
            <Title tag="h3">OVERVIEW</Title>
            <div className={styles.overview}>{overviewDragonEl}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default withLayout(Single);
