import React from 'react';
import '../About.css';
import TaskMasterN from '../../../assets/avatar/TASKMASTER normal.png';
import TaskMasterH from '../../../assets/avatar/TASKMASTER hover.png';
import GatekeeperN from '../../../assets/avatar/GATEKEEPER normal.png';
import GatekeeperH from '../../../assets/avatar/GATEKEEPER hover.png';
import StrategySageN from '../../../assets/avatar/STRATEGY SAGE normal.png';
import StrategySageH from '../../../assets/avatar/STRATEGY SAGE hover.png';
import WanderingWizardN from '../../../assets/avatar/WANDERING WIZARD normal.png';
import WanderingWizardH from '../../../assets/avatar/WANDERING WIZARD hover.png';
import PixelPicassoN from '../../../assets/avatar/PIXEL PICASSO normal.png';
import PixelPicassoH from '../../../assets/avatar/PIXEL PICASSO hover.png';

function Card() {
  return (
    <section className="about__container">
      <div className="card__grid_about">
  <div className="card__about">
    <div className="content">
      <img src={TaskMasterN} alt="" className="avatar normal-avatar" />
      <img src={TaskMasterH} className="avatar hover-avatar img-top" alt="Card Front" />
      <h3>Taskmaster</h3>
      <div className="hover_content">
        <p>
              The Taskmaster is a dynamic force within the team, orchestrating
              and optimizing operations with precision and finesse. With his
              keen eye for detail and exceptional organizational skills, he
              ensures that tasks are efficiently executed, deadlines are met,
              and objectives are achieved. He is the driving force behind
              seamless processes and effective coordination.
            </p>
          </div>
        </div>
      </div>
      <div className="card__about">
        <div className="content">
        <img src={StrategySageN} alt="" className="avatar normal-avatar" />
      <img src={StrategySageH} className="avatar hover-avatar img-top" alt="Card Front" />
          <h3>Strategy Sage</h3>
          <div className="hover_content">
            <p>
              The Strategy Sage is the guiding light of the team, with a wealth
              of knowledge and experience in management and business
              development. She possess a strategic mindset, capable of
              analyzing market trends, identifying growth opportunities, and
              formulating effective strategies. With her visionary outlook and
              leadership acumen, She chart the team's path to success,
              navigating through challenges and propelling growth.
            </p>
          </div>
        </div>
      </div>
      <div className="card__about">
        <div className="content">
        <img src={GatekeeperN} alt="" className="avatar normal-avatar" />
      <img src={GatekeeperH} className="avatar hover-avatar img-top" alt="Card Front" />
      
          <h3>Gatekeeper</h3>
          <div className="hover_content">
            <p>
              The Gatekeeper is the guardian of order and compliance within the
              team. Armed with her extensive knowledge of administrative and
              legal matters, she safeguards the team's interests, ensuring that
              all documentation, contracts, and procedures adhere to regulations
              and best practices. She provides a solid foundation of structure
              and reliability, acting as a gatekeeper to protect the team's
              integrity.
            </p>
          </div>
        </div>
      </div>
      <div className="card__about">
        <div className="content">
        <img src={PixelPicassoN} alt="" className="avatar normal-avatar" />
      <img src={PixelPicassoH} className="avatar hover-avatar img-top" alt="Card Front" />
      
          <h3>Pixel Picasso</h3>
          <div className="hover_content">
            <p>
              The Pixel Picasso is the creative visionary of the team, with an
              unmatched passion for design and visual storytelling. Armed with a
              digital brush, he breathes life into concepts and ideas, crafting
              stunning and captivating graphics that leave a lasting impression.
              His artistic prowess and innovative thinking make them the go-to
              expert for transforming ideas into visually striking realities.
            </p>
          </div>
        </div>
      </div>
      <div className="card__about">
        <div className="content">
        <img src={WanderingWizardN} alt="" className="avatar normal-avatar" />
      <img src={WanderingWizardH} className="avatar hover-avatar img-top" alt="Card Front" />
      
          <h3>Wandering Wizard</h3>
          <div className="hover_content">
            <p>
              The Wandering Wizard is the team member dedicated to bridging gaps
              and fostering connections between countries and cultures. He
              possesses a global perspective and serves as a catalyst for
              international collaboration and partnerships. With his diplomatic
              skills and cultural sensitivity, he traverses borders, breaking
              down barriers, and fostering mutual understanding, ultimately
              bringing diverse communities together.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Card;
