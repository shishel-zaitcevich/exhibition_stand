import { Flashing } from '@/shared/Flashing';
import { Ray } from '@/shared/Ray/Ray';
import { Box } from '@mui/material';

export const Backstage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        overflow: 'hidden',
        zIndex: -100,
      }}
    >
      <Ray offset={-200} degree={36} height={12} />
      <Ray offset={-290} degree={48} />
      <Ray offset={-250} degree={69} accent />
      <Ray offset={-50} degree={15} />

      <Ray offset={-200} degree={-25} height={12} direction="bottom" />
      <Ray offset={-290} degree={-42} direction="bottom" accent />
      <Ray offset={-50} degree={-79} direction="bottom" />
      <Ray offset={-190} degree={-66} height={22} direction="bottom" />
      <Ray offset={-250} degree={-10} direction="bottom" />

      <Ray offset={2710} degree={42} accent />
      <Ray offset={2730} degree={79} />
      <Ray offset={2690} degree={66} height={22} />
      <Ray offset={2650} degree={10} />

      <Ray offset={3010} degree={-42} accent direction="bottom"/>
      <Ray offset={3030} degree={-79} direction="bottom"/>
      <Ray offset={3090} degree={-66} height={22} direction="bottom"/>
      <Ray offset={3050} degree={-25} direction="bottom"/>
      <Ray offset={3110} degree={42} accent direction="bottom"/>
      <Ray offset={3130} degree={79} direction="bottom"/>
      <Ray offset={3190} degree={66} height={22} direction="bottom"/>
      <Ray offset={3150} degree={25} direction="bottom"/>

      <Flashing x={-40} y={4} />
      <Flashing x={50} y={20} />
      <Flashing x={-20} y={50} degree={20} />
    </Box>
  );
};
