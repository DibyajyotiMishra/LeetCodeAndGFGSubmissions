import Particles from "react-tsparticles";
import particlesConfig from "./auth/config/particles-config";
const ParticleBackground = () => {
  return (
    <div>
      <Particles params={particlesConfig}></Particles>
    </div>
  );
};

export default ParticleBackground;
