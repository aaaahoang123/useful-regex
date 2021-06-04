// Match cvo. and not match config|local.ERROR|exception
const MATCH_STRING_AND_NOT_CONTAIN_ANOTHERS = /^(?!.*?(config|local\.ERROR|exception)).*\b(cvo\.)\b/g;
