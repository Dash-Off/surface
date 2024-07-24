import { Grid, Typography } from "@mui/material";
import ScoreMeter from "./ScoreMeter.jsx";

const ScorePane = (scores) => {
  return (
    <Grid>
      <Typography mb="20px" variant="h6" ml="8px">
        Your Scores:
      </Typography>
      <ScoreMeter
        score={scores.scores.overallScore}
        text={"OverAll"}
        description="Total scores including some booster scores for good practices"
      />
      <ScoreMeter
        score={scores.scores.grammarScore}
        small
        text={"Grammar"}
        description="Grammatical evaluation"
      />
      <ScoreMeter
        score={scores.scores.vocabScore}
        small
        text={"Vocabulary"}
        description="Reflects diversity and vocabulary strength"
      />
      <ScoreMeter
        score={scores.scores.structureScore}
        small
        text={"Structure"}
        description="Ease of reading & other factors"
      />
    </Grid>
  );
};

export default ScorePane;
