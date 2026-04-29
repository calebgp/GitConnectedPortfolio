import React from "react";
import { Work } from "../../models/gc-profile";
import { Box, Typography, Chip } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { useTranslation } from "react-i18next";

interface WorkExperienceProps {
  work: Work[];
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(date: { year: number; month: number } | undefined): string {
  if (!date || !date.year) return "";
  return `${MONTHS[(date.month - 2) % 12]} ${date.year}`;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ work }) => {
  const { t } = useTranslation();

  if (!work || work.length === 0) return null;

  const sorted = [...work].sort((a, b) => {
    if (a.isCurrentRole && !b.isCurrentRole) return -1;
    if (!a.isCurrentRole && b.isCurrentRole) return 1;
    return (b.start?.year ?? 0) - (a.start?.year ?? 0);
  });

  return (
    <Box sx={{ width: "100%", my: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{ fontWeight: 700, mb: 5 }}
      >
        {t("workExperience")}
      </Typography>

      <Box
        sx={{
          position: "relative",
          maxWidth: 760,
          mx: "auto",
          px: { xs: 1, sm: 3 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: { xs: 28, sm: 44 },
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(to bottom, #03dac6 60%, transparent)",
            opacity: 0.4,
          }}
        />

        {sorted.map((job, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              pl: { xs: 7, sm: 9 },
              mb: 4,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: { xs: 18, sm: 34 },
                top: 18,
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: job.isCurrentRole ? "#03dac6" : "#2d2d2d",
                border: "3px solid",
                borderColor: job.isCurrentRole ? "#03dac6" : "#555",
                boxShadow: job.isCurrentRole
                  ? "0 0 12px rgba(3,218,198,0.5)"
                  : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <WorkIcon
                sx={{
                  fontSize: 10,
                  color: job.isCurrentRole ? "#080808" : "#888",
                }}
              />
            </Box>

            <Box
              sx={{
                backgroundColor: "#1a1a1a",
                borderRadius: 2,
                p: { xs: 2, sm: 3 },
                border: "1px solid",
                borderColor: job.isCurrentRole
                  ? "rgba(3,218,198,0.25)"
                  : "rgba(255,255,255,0.07)",
                textAlign: "left",
                transition: "all 0.25s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
                  borderColor: job.isCurrentRole
                    ? "rgba(3,218,198,0.5)"
                    : "rgba(255,255,255,0.12)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 1.5,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "white", lineHeight: 1.3 }}
                  >
                    {job.position}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#03dac6",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#03dac6", textDecoration: "none" }}
                      >
                        {job.name}
                      </a>
                    ) : (
                      job.name
                    )}
                  </Typography>
                  {job.location && (
                    <Typography
                      variant="caption"
                      sx={{ color: "#777", display: "block", mt: 0.3 }}
                    >
                      📍 {job.location}
                    </Typography>
                  )}
                </Box>
                <Box sx={{ textAlign: "right", flexShrink: 0 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#b0b0b0",
                      display: "block",
                      fontSize: "0.82rem",
                    }}
                  >
                    {formatDate(job.start)} –{" "}
                    {job.isCurrentRole
                      ? t("present")
                      : formatDate(job.end) || t("ended")}
                  </Typography>
                  {job.isCurrentRole && (
                    <Chip
                      label={t("current")}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(3,218,198,0.12)",
                        color: "#03dac6",
                        fontSize: "0.7rem",
                        mt: 0.5,
                        height: 20,
                      }}
                    />
                  )}
                </Box>
              </Box>

              {job.summary && (
                <Typography
                  variant="body2"
                  sx={{ color: "#b0b0b0", mb: 1.5, lineHeight: 1.75 }}
                >
                  {job.summary}
                </Typography>
              )}

              {job.highlights && job.highlights.length > 0 && (
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1 }}
                >
                  {job.highlights.map((h, i) => (
                    <Chip
                      key={i}
                      label={h}
                      size="small"
                      sx={{
                        backgroundColor: "#2a2a2a",
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "0.75rem",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WorkExperience;
