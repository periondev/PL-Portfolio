import { languages, jsAndCssTools, backendAndOther } from '../lib/skillData';
import { SkillType } from '@lib/types';
export const SkillArea = () => {
  return (
    <div>
      <h3>Languages</h3>
      <div className='skill-container'>
        {languages.map((lan: SkillType, index: number) => {
          const Icon = lan.icon;
          return (
            <div key={index} className='skill-Item'>
              <Icon className='skill-icon' />
              <p>{lan.name}</p>
            </div>
          );
        })}
      </div>
      <h3>Frameworks and Libraries</h3>
      <div className='skill-container'>
        {jsAndCssTools.map((jsAndCssTool: SkillType, index: number) => {
          const Icon = jsAndCssTool.icon;
          return (
            <div key={index} className='skill-Item'>
              <Icon className='skill-icon' />
              <p>{jsAndCssTool.name}</p>
            </div>
          );
        })}
      </div>
      <h3>Backend and Other Dev Tools</h3>
      <div className='skill-container'>
        {backendAndOther.map((backendAndOther: SkillType, index: number) => {
          const Icon = backendAndOther.icon;
          return (
            <div key={index} className='skill-Item'>
              <Icon className='skill-icon' />
              <p>{backendAndOther.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
